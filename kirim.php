<?php
 header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

session_start();


include "koneksi.php";
$nick=$_SESSION['nick'];
$pesan=strip_tags($_POST['pesan']);

//$file=$_FILES['file'];

$temp = "file/";
//$fili=$_POST['fili'];
 $fileupload = $_FILES['fileupload']['tmp_name'];
  $FileName = $_FILES['fileupload']['name'];
  $FileType = $_FILES['fileupload']['type'];

if (!empty($fileupload))
	
	{
		$filex=$FileName;
	move_uploaded_file($_FILES["fileupload"]["tmp_name"], $temp.$filex);
	}

else
{$filex=$FileName;}

$waktu=date("h:m:s");
$masukan=$koneksi->prepare("insert into pesan (nick,pesan,waktu,file) values (:nick,:pesan,:waktu,:file) ");
$masukan->BindParam(":nick",$nick);
$masukan->BindParam(":pesan",$pesan);
$masukan->BindParam(":waktu",$waktu);
$masukan->BindParam(":file",$filex);
$masukan->execute();
if($masukan->rowCount()==1)
{
	//print "terkirim";
	header('Location: index.php#chatting');
}
else
{
	//print "gagal";
	header('Location: index.php#chatting');
}
?>