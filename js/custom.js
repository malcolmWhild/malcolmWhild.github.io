// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#rest").hide();
	$(".returnToKeySkills").hide();
	$("#dataProcessingItem").click(function(){
		$("#dataProcessing").slideDown(200);
		$("#keySkills").slideUp(200);
	});
	$(".returnToKeySkills").click(function(){
		$("#keySkills").slideDown(200);
		$("#dataProcessing").hide();
		$("#rest").hide();
		$(".returnToKeySkills").hide();
	});
});
