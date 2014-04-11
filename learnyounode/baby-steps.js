var sum = 0;
var i = 2;
for(;i<process.argv.length;i++) {
	sum += Number(process.argv[i]);
}
console.log(sum);
