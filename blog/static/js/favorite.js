function getCookie(name){var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+ 1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+ 1));break;}}}
return cookieValue;}
var csrftoken=getCookie('csrftoken');$.ajaxSetup({beforeSend:function(xhr){xhr.setRequestHeader("X-CSRFToken",csrftoken);}});$('.favorite').on('click',function(){var $obj=$(this);var name=$obj.parent().find('.exhibit-name').html();var target_id=$obj.attr('id').split('_')[1];$obj.prop('disabled',true);toastr.options={"closeButton":true,"debug":false,"newestOnTop":true,"progressBar":false,"positionClass":"toast-bottom-right","preventDuplicates":false,"onclick":null,"showDuration":"300","hideDuration":"1000","timeOut":"5000","extendedTimeOut":"1000","showEasing":"swing","hideEasing":"linear","showMethod":"fadeIn","hideMethod":"fadeOut"};$.ajax({url:$obj.attr('target_url'),type:'POST',data:{target_model:$obj.attr('model'),target_object_id:target_id},success:function(response){if(response.status=='added'){$obj.children().removeClass('fa-heart-o').addClass('fa-heart');toastr.success("나의 전시에 추가되었습니다.",name);}
else{$obj.children().removeClass('fa-heart').addClass('fa-heart-o');$obj.prop('disabled',false);toastr.warning("나의 전시에서 삭제되었습니다.",name);}},error:function(response){toastr.error("로그인이 필요합니다.");}});});