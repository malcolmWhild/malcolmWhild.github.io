// JavaScript Document
$(document).ready(function () {
	"use strict";
	var mT = 200;
	setOrientationStyles();


	$(window).on("orientationchange", function (event) {
		setOrientationStyles();
	});

	function setOrientationStyles(){
		var viewportWidth = $(window).width();
		var viewportHeight = $(window).height();
			if (viewportWidth > viewportHeight) {
			$("#frontPage").removeClass("portrait");
			$("#frontPage").addClass("landscape");
		} else {
			$("#frontPage").removeClass("landscape");
			$("#frontPage").addClass("portrait");
		}
	}

	$("#dataProcessing, #indesignAndVDPDocumentSetup,#edmCampaigns, #multichannelCampaigns,#fullName").hide();

	$(".navLink").click(function () {
		$("#mainHeader,#mainIntro").hide();
		$('.nav-collapse').collapse('hide');
	});

	$("#navbarToggle").click(function () {
		$("#brand").toggle();
		$("#fullName").toggle();
	});
	$("#dataProcessingLink").click(function () {
		$("#indesignAndVDPDocumentSetup,#edmCampaigns,#multichannelCampaigns").hide();
		$("#dataProcessing").slideDown(mT);
	});
	$("#indesignAndVDPDocumentSetupLink").click(function () {
		$("#indesignAndVDPDocumentSetup").slideDown(mT);
		$("#dataProcessing,#edmCampaigns,#multichannelCampaigns").hide();
	});
	$("#edmCampaignsLink").click(function () {
		$("#edmCampaigns").slideDown(mT);
		$("#dataProcessing,#indesignAndVDPDocumentSetup,#multichannelCampaigns").hide();
	});
	$("#multichannelCampaignsLink").click(function () {
		$("#multichannelCampaigns").slideDown(mT);
		$("#dataProcessing,#indesignAndVDPDocumentSetup,#edmCampaigns").hide();
	});
	$(".showTop").click(function () {
		$("#mainNav,#mainHeader").show();
		$("button").addClass("collapsed");
		$("#navbar").removeClass("in")
	})

});