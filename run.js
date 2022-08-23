var fs = require("fs");
var path = require("path");
var sharp = require("sharp");

var input_dir = "input";
var output_dir = "output";

var files = fs.readdirSync(input_dir);

files.forEach((file) => {
    var ipath = `${input_dir}/${file}`;

    var opath = `${output_dir}/${file}`;
	var opath = `${output_dir}/${path.parse(opath).name}`;

    sharp(ipath)
        .webp()
        .toFile(`${opath}.webp`)
        .then(function(info){
            console.log(info);
        })
        .catch(function(err){
            console.log(err);
        });
})
