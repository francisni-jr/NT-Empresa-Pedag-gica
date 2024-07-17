<script>
  import '../app.postcss';
 import { MinimizeIcon, AlignRightIcon, InstagramIcon, MailIcon, GithubIcon,
 HomeIcon, InfoIcon, HelpCircleIcon, PlayIcon, LayersIcon, ChevronLeftIcon,
 MessageSquareIcon, PlusIcon} from 'svelte-feather-icons'
</script>


<div id="app-lay" class="h-full font-general text-base break-words mt-5 mx-5
scroll-smooth rounded-t-xl
bg-gradient-to-b from-elementary via-action to-base
">
  <header class="p-10 flex items-end justify-end">
    <div class="">
       <input type="checkbox" id="drawer-right" class="drawer-toggle" />

<label class="rounded-xl  flex 
    shadow-[1px_1px_30px_cyan] p-5 bg-action  text-elementary"  for="drawer-right"> 
    <AlignRightIcon/>
</label>
<label class="overlay" for="drawer-right"></label>
<div class="drawer drawer-right bg-transparent">
	<div class="drawer-content bg-elementary  rounded-[20px] mx-5 mt-5  pt-10 flex flex-col gap-10 h-full">
		<label for="drawer-right" class="rounded-xl  flex 
    shadow-[1px_1px_60px_cyan] (DEMO VERSION!) font-header p-5 bg-action  text-elementary"><ChevronLeftIcon class="font-bold" /> FECHAR</label>
		<div class="flex overflow-y-scroll flex-col justify-center items-start gap-5">
		  <a class="font-header border-b w-full rounded-xl justify-center items-center p-5 flex gap-5
		  text-action" href="/"><HomeIcon size="15" /> Início</a>
		  <a class="font-header border-b w-full rounded-xl justify-center items-center p-5 flex gap-5
		  text-action" href="/suporte"><HelpCircleIcon size="15" /> Suporte</a>
		  <a class="font-header border-b w-full rounded-xl justify-center items-center p-5 flex gap-5
		  text-action" href="/contato"><MessageSquareIcon size="15" /> Contato</a>
		  <a class="font-header border-b w-full rounded-xl justify-center items-center p-5 flex gap-5
		  text-action" href="/sobre"><PlusIcon size="15" /> Informações</a>
		</div>
	</div>
</div>
    </div>
     
  </header>
  
  <slot />
  
  <footer class="flex flex-col justify-center items-center p-30 text-elementary">
     <div class="text-elementary mb-5 text-sm">
	<ul class="flex gap-10">
		<li>
			<a class="font-header border-b w-full rounded-xl justify-center items-center p-5 flex gap-5
		  text-elementary" href="/suporte"><HelpCircleIcon size="15" />Suporte</a>
		</li>
			<li>
			<a class="font-header border-b w-full rounded-xl justify-center items-center p-5 flex gap-5
		  text-elementary" href="/contato"><MessageSquareIcon size="15" /> Contato</a>
		</li>
		
		
	</ul>
</div>
    <img class="w-30" src="https://res.cloudinary.com/dtdz4se00/image/upload/v1713475087/Marca_PNG_tpcpob.png" alt="" />
    <br />
    &copy; NOVO TALENTO
  </footer>
</div>


<style type="text/css" media="all">

</style>