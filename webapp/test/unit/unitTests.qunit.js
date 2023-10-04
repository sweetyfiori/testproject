/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nscustomertest/ztest/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
