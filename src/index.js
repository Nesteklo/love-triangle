/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []){
  var count=0, a, b, c, d;
  for (var i = 0; i <= preferences.length; i++){
  	a = preferences[i];
  	b = preferences[a-1];
  	c = preferences[b-1];
  	if ((c-1) == i){
  		count++;
  	}
}
  return Math.floor(count/3);
};
