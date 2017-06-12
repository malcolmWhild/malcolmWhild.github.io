// JavaScript Document
$(document).ready(function () {
	"use strict";
	$("#dataProcessing").hide();
	$("#vdpDocumentSetup").hide();
	$("#edmCampaigns").hide();
	$("#multichannelCampaigns").hide();

	$("#dataProcessingLinkXS").click(function () {
		$("#dataProcessing").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#vdpDocumentSetup").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#vdpDocumentSetupLinkXS").click(function () {
		$("#vdpDocumentSetup").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#edmCampaignsLinkXS").click(function () {
		$("#edmCampaigns").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#vdpDocumentSetup").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#multichannelCampaignsLinkXS").click(function () {
		$("#multichannelCampaigns").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#vdpDocumentSetup").hide();
		$("#edmCampaigns").hide();
	});

	$("#dataProcessingLinkSM").click(function () {
		$("#dataProcessing").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#vdpDocumentSetup").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#vdpDocumentSetupLinkSM").click(function () {
		$("#vdpDocumentSetup").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#edmCampaigns").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#edmCampaignsLinkSM").click(function () {
		$("#edmCampaigns").slideDown(200);
		$("#mainIntro").slideUp(200);
		$("#dataProcessing").hide();
		$("#vdpDocumentSetup").hide();
		$("#multichannelCampaigns").hide();
	});
	$("#multichannelCampaignsLinkSM").click(function () {
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