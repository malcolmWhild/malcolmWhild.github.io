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
	$(".toTop").click(function () {
		$("#mainIntro").slideDown(200);
		$(".navbar-collapse").hide();
		$("#dataProcessing").hide();
		$("#vdpDocumentSetup").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
});