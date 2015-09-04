function TransitivityRelations(strArr) {

  function addConnections(node1, node2) { //Inputs are the indices of the nodes (single-digit numbers)
    connections[node2].forEach(function(element, index) {
      if (element === 1 && connections[node1][index] === 0 && node1 != index) {
        connections[node1][index] = 1;
        result.push("(" + node1 + "," + index + ")");
      }
    })
  }

  function stringsToArrays(element, index, array) {
    var result = [];
    for (var i = 1; i < element.length; i += 2) {
      result.push(Number(element[i]));
    }
    return result;
  }

  var connections = strArr.map(stringsToArrays),
      result = [];
  connections.forEach(function(element, index) {
    for (var i = 0; i < element.length; i++) {
      if (i != index && element[i] === 1) {
        addConnections(index, i);
      }
    }
  })
  if (result.length === 0) {
    return "transitive";
  }
  result.sort();
  return result.join("-");
}

var strArr = ["(1,1,1)","(0,1,1)","(0,1,1)"];
//var strArr = ["(1,1,1)","(1,1,1)","(0,1,1)"]; //Output should be "(2-0)"
//var strArr = ["(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)"];
//var strArr = ["(1,1,0,0)","(0,0,1,0)","(0,1,0,1)","(1,0,0,1)"];
console.log(TransitivityRelations(strArr));