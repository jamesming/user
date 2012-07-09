<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://opengraphprotocol.org/schema/"
	 xmlns:fb="http://www.facebook.com/2008/fbml">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		<?php include('../../default/uagent.php'); ?>
		<?php include('../../default/config.php'); ?>
		
		<meta property="og:title" content="<?php echo $title; ?>"/>
		<meta property="og:description" content="<?php echo $about; ?>"/>
		<meta property="og:url" content="<?php echo $flashDomain; ?>/user/<?php echo $userId; ?>/portal/index.php"/>
		<meta property="og:image" content="<?php echo $flashDomain; ?>/user/<?php echo $userId; ?>/deploy/userassets/screenshot.jpg?<?php echo time(); ?>"/>
		<meta property="og:type" content="movie" />
		<meta property="og:video" content="<?php echo $flashDomain; ?>/flash/widget400x350.swf?artistid=<?php echo $userId; ?>" />
		<meta property="og:video:height" content="370" />
		<meta property="og:video:type" content="application/x-shockwave-flash" />
		
		<title><?php echo $title; ?></title>
		
		<link rel="image_src" href="<?php echo $flashDomain; ?>/user/<?php echo $userId; ?>/deploy/userassets/screenshot.jpg?<?php echo time(); ?>">
		<link href="../../default/stylesheet.css" rel="stylesheet" type="text/css">
		<script src="http://cdn.gigya.com/wildfire/js/wfapiv2.js"></script>
	</head>

	<?php if ($uagent_obj->DetectSmartphone()) { ?>
		<body>
			<iframe src="<?php echo $flashDomain; ?>/mobile/home/<?php echo $userId; ?>" width="100%" height="100%" frameborder="0"></iframe>
		</body>
	<?php } else { ?>
		<body style="background: url('<?php echo $flashDomain; ?>/user/<?php echo $userId; ?>/deploy/userassets/background.png') top no-repeat #000000;">
			<div class='mainWrapper' style='width: 330px; margin-left: -165px; margin-top: -140px;'>
				<div class='flashWrapper'>
					<iframe src="<?php echo $flash300x250URL; ?>" width="300" height="250" frameborder="0"></iframe>
				</div>
			</div>
		</body>
	<?php } ?>

</html>