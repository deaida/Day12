function myNes(){
    var myStorage = {
        "car": {
            "inside":{
                "glove box": "maps",
                "passnger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    }
    // Only change code below this line
var gloveBoxContents;
gloveBoxContents=  myStorage.inside[glove box];
    // Only change code above this line
}
console.log(myNes(gloveBoxContents));
module. exports = myNes;