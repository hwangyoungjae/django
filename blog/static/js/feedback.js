var feedbackToggle;(function($){feedbackToggle=function(){$('#feedback_tab, #feedback_panel').toggle();};$(document).ready(function(){$('#feedback_tab button, #feedback_panel button').click(feedbackToggle);$('#feedback_form').submit(function(e){e.preventDefault();var action=this.action;$.ajax(action,{'type':'POST','data':$(this).serialize(),'success':function(data,textStatus,jqXHR){alert("피드백을 남겨주셔서 감사합니다.");$("#feedback_panel form textarea").val("");feedbackToggle();},'error':function(jqXHR,textStatus,errorThrown){if(jqXHR.status==400)
{var errors="The following field error(s) ocurred: \n";errors+=jqXHR.responseText;alert(errors);}
else if(jqXHR.responseText!=''){alert("The following error ocurred: \n"+jqXHR.responseText);}
else{alert('An unknown error occurred.');}}});});});})(jQuery);