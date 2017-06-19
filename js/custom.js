// JavaScript Document
$(document).ready(function () {
	"use strict";
	var mT=200;
	$("#dataProcessing, #indesignAndVDPDocumentSetup, #multichannelCampaigns").hide();

	$("#dataProcessingLink").click(function () {
		$("#dataProcessing").slideDown(mT);
		$("#mainIntro").slideUp(mT);
		$("#indesignAndVDPDocumentSetup").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#indesignAndVDPDocumentSetupLink").click(function () {
		$("#indesignAndVDPDocumentSetup").slideDown(mT);
		$("#mainIntro").slideUp(mT);
		$("#dataProcessing").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#multichannelCampaignsLink").click(function () {
		$("#multichannelCampaigns").slideDown(mT);
		$("#mainIntro").slideUp(mT);
		$("#dataProcessing").hide();
		$("#indesignAndVDPDocumentSetup").hide();
		$("#edmCampaigns").hide();
	});

});