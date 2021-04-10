module.exports = {
	publicPath: '/',
	outputDir:'dist',
	assetsDir:'assets',
	devServer: {
		port: 8888,     // 端口
		proxy: {
			// eslint-disable-next-line no-mixed-spaces-and-tabs
			  '/api': {
				target: 'http://localhost:8081/fish',  //对应自己的接口
				changeOrigin: true,						//是否跨域
				ws: true,							 //是否代理 websockets
				secure: false, 							//是否https接口
				pathRewrite: {
				  '^/api': ''
				}
			  }
			}
	},

	// 取消 eslint 验证
	lintOnSave: false,

	// pluginOptions: {
	//   i18n: {
	// 	locale: 'en',
	// 	fallbackLocale: 'en',
	// 	localeDir: 'locales',
	// 	enableInSFC: false
	//   }
	// }
  };
