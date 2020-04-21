d3.csv("Fire_Department_Calls_for_Service.csv").then(createNodeLink);
function createNodeLink(data_csv) {

  console.log(data_csv);

  let width = 960;
  let height = 500;
  let pad = 140;
  let diameter = 700;

  // setup svg width and height
  let svg = d3.select("body").select("svg#nodelink")
    .style("width", width)
    .style("height", height);

  // shift (0, 0) a little bit to leave some padding
  let plot = svg.append("g")
    .attr("id", "plot")
    .attr("transform", translate(pad + 300, pad + 100)); //translate(width / 2, (height / 2) ))

  let nested_data = d3.nest()
    .key(function(d) {
      return d["City"];
    })
    .key(function(d) {
      return d["Call Type Group"]
    })
    .key(function(d) {
      return d["Call Type"]
    })
    .key(function(d) {
      return d["Call Final Disposition"]
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(data_csv);

  console.log("nested_data", nested_data);

  root = nested_data[0].key;
  console.log("root", root);

}

function translate(x, y) {
    return 'translate(' + String(x) + ',' + String(y) + ')';
  }
