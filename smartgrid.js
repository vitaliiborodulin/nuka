module.exports = {
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1190px",
		fields: "30px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		lg: {
			width: "900px"
		},
		md: {
			width: "768px",
			fields: "24px"
		},
		sm: {
			width: "576px",
			fields: "10px"
		},
		xs: {
			width: "320px",
		}
	}
}