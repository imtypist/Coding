$(document).ready(function(){

	//对注册页面的表单进行验证
	$("#reg-form").validate({
		rules:{
			stuId:{
				required:true,
				rangelength:[13,13]
			},
			id:{
				required:true,
				rangelength:[18,18]
			},
			email:{
				required:true,
				email:true

			},
			password:{
				required:true,
				minlength:6,
				maxlength:16
			}
		},
		messages:{
			stuId:{
				required:"",
				rangelength:""
			},
			id:{
				required:"",
				rangelength:"",
			},
			email:{
				required:"",
				email:"" 
			},
			password:{
				required:"",
				minlength:"",
				maxlength:""
			}
			
		},
	//当所有的表单都验证正确后，才能点击注册进行注册行为
		submitHandler:function(){
			$.ajax({
				type:"POST",
				url:"inno.uestc.edu.cn/user/register",
				data:$('#reg-form').serialize(),
				success:function(){
					window.location.href = "new_login.html"
				},
				error:function(){
					alert("输入有误，请刷新页面重新输入");
				}
			});
		}
	});
	
	//对登录页面的表单进行验证
	$("#login-form").validate({
		rules:{
			email:{
				required:true,
				email:true

			},
			password:{
				required:true,
				minlength:6,
				maxlength:16
			}
		},
		messages:{
			email:{
				required:"",
				email:"" 
			},
			password:{
				required:"",
				minlength:"",
				maxlength:""
			}
		},
	
	//当所有的表单都验证正确后，才能点击登录进行登录行为
		submitHandler:function(){
			$.ajax({
				type:"POST",
				url:"inno.uestc.edu.cn/user/register",
				data:$('#login-form').serialize(),
				success:function(){
					window.location.href = "new-register.html"
				},
				error:function(){
					alert("输入有误，请刷新页面重新输入");
				}
			});
		}
	});
});
