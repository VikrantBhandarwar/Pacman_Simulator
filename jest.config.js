const path = require("path");

module.exports = {
	verbose: true,
	moduleNameMapper: {
		"^@app(.*)": path.resolve(__dirname, "app$1")
	},
	testMatch: ["**/test/**/*.[j]s", "**/?(*.)+(test).[j]s"]
};
