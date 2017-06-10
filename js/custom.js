// JavaScript Document
$(document).ready(function () {
	"use strict";
	$("#dataProcessing").hide();
	$("#vdpDocumentSetup").hide();
	$("#edmCampaigns").hide();
	$("#multichannelCampaigns").hide();
	$("#dataProcessingLink").click(function () {
		$("#dataProcessing").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#vdpDocumentSetup").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#vdpDocumentSetupLink").click(function () {
		$("#vdpDocumentSetup").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#edmCampaignsLink").click(function () {
		$("#edmCampaigns").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#vdpDocumentSetup").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#multichannelCampaignsLink").click(function () {
		$("#multichannelCampaigns").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#vdpDocumentSetup").hide();
		$("#edmCampaigns").hide();
	});
	$(".toTop").click(function () {
		$("#mainIntro").slideDown(200);
		$("#dataProcessing").hide();
		$("#vdpDocumentSetup").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
});