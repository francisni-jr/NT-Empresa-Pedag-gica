<script>
  import '../app.postcss';
 import { MinimizeIcon, MaximizeIcon, InstagramIcon, MailIcon, GithubIcon,
 HomeIcon, InfoIcon, HelpCircleIcon, PlayIcon, LayersIcon} from 'svelte-feather-icons'
 
 import HomeLoader from '../loaders/HomeLoader.svelte'
</script>


<div id="app-lay" class="h-full font-general text-onmain break-words mx-5 mt-5
border scroll-smooth 
border-t-[10px]
border-b-[0]
border-elementary rounded-t-xl
bg-base dark:bg-base
">
  
  
  <slot />
  
  <footer class="flex flex-col justify-center items-center p-30">
     <div class="breadcrumbs text-elementary mb-5 text-sm">
	<ul class="flex">
		<li>
			<a href="https://www.instagram.com/novotalentopb/" class="flex justify-center text-elementary items-center">
				<InstagramIcon class="mr-[5px]" size="15" />
				Instagram
			</a>
		</li>
		<li>
			<a href="mailto:agenciantpb@gmail.com" class="flex justify-center text-elementary items-center">
				<MailIcon class="mr-[5px]" size="15" />
				Email
			</a>
		</li>
			<li>
			<a href="https://github.com/francisni-jr/NT-Empresa-Pedagogica" class="flex justify-center text-elementary items-center">
				<GithubIcon class="mr-[5px]" size="15" /> Fonte
			</a>
		</li>
		
		
	</ul>
</div>
    <img width="50%" class="animate-jump-in animate-once animate-delay-[2s]" src="https://res.cloudinary.com/dtdz4se00/image/upload/v1713475087/Marca_PNG_tpcpob.png" alt="" />
  </footer>
  
</div>


<style type="text/css" media="all">


</style>