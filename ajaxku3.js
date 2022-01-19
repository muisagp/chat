$(document).ready(function()
{
				// ajax login
				$("#formmasuk").submit(function()
				{
				var unick=$.trim($("#nick").val());
				var upass=$.trim($("#pass").val());
				if($("#cokie").is(':checked'))
				{
					var cokie=$("#cokie").val();
				}
				$.ajax({
				url : 'login.php',
				data : 'nick='+unick+'&pass='+upass+'&cokie='+cokie,
				type : 'POST',
				success : function(hasil){
								if(hasil=="ok")
								{
								document.location="index.php";
								}
								else
								{
								$("#masuk").html('Masuk');
								$("#notif").html('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button>Nickname atau Password Salah ! </div>');
								return false;
								}
							},
					});
					return false;
				});
			
			//ajax daftar
			$("#formdaftar").submit(function()
			{
			var unick=$("#dnick").val();
			var uemail=$("#email").val();
			var upass=$("#dpass").val();
			$.ajax({
			url : 'daftar.php',
			data : 'nick='+unick+'&email='+uemail+'&pass='+upass,
			type : 'POST',
			success : function(hasil){
							if(hasil=="ada")
							{
							$("#dnotif").html('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button> Anda sudah terdaftar ! </div>');
							return false;	
							}
							else if(hasil=="yes")
							{
							$("#dnotif").html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Pendaftaran Berhasil, Tunggu Sebentar ! <img src="alihkan.gif"></div>');
								function alihkan()
								{
								document.location="index.php";
								}
								setTimeout(alihkan,5000);
							}
							else
							{
							$("#dnotif").html('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button> Gagal Mendaftar ! </div>');
							return false;
							}
						},
				});
				return false;
			});
			//load pesan
			function ambilpesan()
			{
				$(".boxpesan").load("ambil.php");
				var con = document.getElementById("boxpesan");
				con.scrollTop = con.scrollHeight;
			}
			setInterval(ambilpesan,1000);
			//load online
			function ol()
			{
			$(".boxonline").load("online.php");	
			}
			setInterval(ol,1000);
			
			
			
			//kirim pesan chat
			$("#formpesan").submit(function()

			{
			
			

			//const fileupload = $('#myfile').attr('files');
			//const fileupload = $('#myfile')[0].files;
			//const fileupload = $('#myfile').prop('files')[0];
			
			//const fileupload = document.querySelector('#myfile');
			

				//var form = $('formpesan')[0];
				//let myForm = document.getElementById('formpesan');
				//let formData = new FormData(myForm);
				
				//formData.append('fileupload', fileupload);
                //formData.append("fileupload", fileupload.files[0]);



                var formData = new FormData($('#formpesan')[0]);
                
				var pesan = $('#pesan').val();
				var fili = $('#fili').val();
				
				//const fileupload = document.querySelector('#myfile');
				
				//formData.append("fileupload", fileupload.files[0]);
				
				formData.append('fileupload', $('input[type=file]')[0].files[0]);

				formData.append('fili', fili);
				formData.append('pesan', pesan);

				//formData.append($('#myfile').attr('files'));
				//formData.append('file', $('input[type=file]')[0].files[0]);

				//formData.append('pesan', pesan);
				
				console.log('DATAZ', formData);
                
				axios.post('http://localhost:5555/chat/kirim.php',
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
        })
        .catch(function () {
          console.log('FAILURE!!');
        });

			
			});
			//hide html audio
			var audio=$('#suara');
			audio.hide();
			//load pesan chat
			function ambilpesan()
			{
				$("#boxpesan").load("ambil.php");
				var con = document.getElementById("boxpesan");
				con.scrollTop = con.scrollHeight;
			}
			setInterval(ambilpesan,1000);
			//load emoticon
			$("#emot").popover({
			html: true,
			content: function(){
			// emoticon from www.animated-gifs.eu
			return "<img src='../nge_chat/emot/akasmaran.gif' title='[kasmaran]' onClick=\"addemot('[kasmaran]')\">"+
			"<img src='../nge_chat/emot/akedip.gif' title='[kedip]' onClick=\"addemot('[kedip]')\">"+
			"<img src='../nge_chat/emot/aketawa.gif' title='[ketawa]' onClick=\"addemot('[ketawa]')\">"+
			"<img src='../nge_chat/emot/amarah.gif' title='[marah]' onClick=\"addemot('[marah]')\">"+
			"<img src='../nge_chat/emot/amelet.gif' title='[melet]' onClick=\"addemot('[melet]')\">"+
			"<img src='../nge_chat/emot/anangis.gif' title='[nangis]' onClick=\"addemot('[nangis]')\">"+
			"<img src='../nge_chat/emot/asakit.gif' title='[sakit]' onClick=\"addemot('[sakit]')\">"+
			"<img src='../nge_chat/emot/bye.gif' title='[bye]' onClick=\"addemot('[bye]')\">"+
			"<img src='../nge_chat/emot/maki-maki.gif' title='[maki-maki]' onClick=\"addemot('[maki-maki]')\">"+
			"<img src='../nge_chat/emot/marah.gif' title='[cmarah]' onClick=\"addemot('[cmarah]')\">"+
			"<img src='../nge_chat/emot/murung.gif' title='[cmurung]' onClick=\"addemot('[cmurung]')\">"+
			"<img src='../nge_chat/emot/nangis.gif' title='[cnangis]' onClick=\"addemot('[cnangis]')\">"+
			"<img src='../nge_chat/emot/sedih.gif' title='[csedih]' onClick=\"addemot('[csedih]')\">"+
			"<img src='../nge_chat/emot/smile.gif' title='[csenyum]' onClick=\"addemot('[csenyum]')\">"+
			"<img src='../nge_chat/emot/bonus.png' title='[bonus]' onClick=\"addemot('[bonus]')\">";
			}
			});
			
			
});
// function add emot to chat form
function addemot(emot)
{
	document.forms[0].pesan.value+=" "+emot;
}
