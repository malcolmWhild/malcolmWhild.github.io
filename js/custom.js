// JavaScript Document
$(document).ready(function () {
	"use strict";
	var mT = 200;
	var viewportWidth = $(window).width();

	$("#dataProcessing, #indesignAndVDPDocumentSetup,#edmCampaigns, #multichannelCampaigns").hide();

	$(".navLink").click(function () {
		if (viewportWidth < 992) {
			$("#mainNav,#mainHeader,#mainIntro").hide();
		} else {
			$("#mainIntro").hide();
		}
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
		$("#mainNav,#mainHeader").slideDown(mT);
		$("button").addClass("collapsed");
		$("#navbar").removeClass("in")
	})

});