// JavaScript Document
$(document).ready(function () {
	"use strict";
	var mT=200;

	$("#dataProcessing, #indesignAndVDPDocumentSetup, #multichannelCampaigns").hide();

	$(".navLink").click(function(){
		$("#mainNav,#mainHeader,#mainIntro").hide();
	});

	$("#dataProcessingLink").click(function () {
		$("#indesignAndVDPDocumentSetup,#multichannelCampaigns").hide();
		$("#dataProcessing").slideDown(mT);
	});
	$("#indesignAndVDPDocumentSetupLink").click(function () {
		$("#indesignAndVDPDocumentSetup").slideDown(mT);
		$("#dataProcessing,#multichannelCampaigns").hide();
	});
	$("#multichannelCampaignsLink").click(function () {
		$("#multichannelCampaigns").slideDown(mT);
		$("#dataProcessing,#indesignAndVDPDocumentSetup").hide();
	});
	$(".showTop").click(function(){
		$("#mainNav,#mainHeader").slideDown(mT);
		$("button").addClass("collapsed");
		$("#navbar").removeClass("in")
	})

});