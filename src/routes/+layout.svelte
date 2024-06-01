<script>
  import '../app.postcss';
 import { MinimizeIcon, MaximizeIcon, InstagramIcon, MailIcon, GithubIcon,
 HomeIcon, InfoIcon, HelpCircleIcon, PlayIcon, LayersIcon} from 'svelte-feather-icons'
 
 import HomeLoader from '../loaders/HomeLoader.svelte'
</script>



<HomeLoader/>

<div id="app-lay" class="h-full font-general text-onmain break-words mx-5 mt-5
border scroll-smooth 
border-t-[10px]
border-b-[0]
border-elementary rounded-t-xl
bg-base dark:bg-base
">
  <header class="w-full bg-gradient-to-b flex flex-col p-5 gap-5 flex justify-center items-center">
    <img width="40%" class="animate-jump-in animate-once animate-delay-[2s]" src="https://res.cloudinary.com/dtdz4se00/image/upload/v1713475087/Marca_PNG_tpcpob.png" alt="" />
    <div class="menu sticky top-20 flex justify-center items-center gap-5">
      <div class="menu-top p-5 flex justify-center items-center flex-wrap  gap-5">
        <input type="checkbox" id="drawer-top" class="drawer-toggle" />
        
        <label for="drawer-top" class="text-action animate-jump-in animate-once
        animate-delay-[3.5s] 
mx-auto rounded-full p-5 mb-5 bg-elementary">
          <MaximizeIcon size="20" />
        </label>
        
        <label class="overlay" for="drawer-top"></label>
        <div class="drawer bg-base dark:bg-base drawer-top  h-full w-full">
          <div class="drawer-content flex flex-col justify-between items-start m-5
	border
border-t-[10px]
border-b-[0]
border-elementary rounded-t-xl">
            <label for="drawer-top" class="text-action
mx-auto rounded-full p-5 bg-elementary m-10">
              <MinimizeIcon size="20" />
            </label>
            <div class="w-full my-5">
              <nav class="bg-base dark:bg-base z-40  p-4 rounded-md">
	<section class="menu-section w-full">
		<ul class=" font-bold   flex flex-col justify-start items-start w-full">
			<li class="rounded-xl active:scale-[0.9] w-full p-5 mb-5 bg-elementary">
			  <a target="_blank" class="flex text-action justify-start items-center  gap-[5px]" href="/">
				  <HomeIcon size="20" />
				<span>Página Inicial</span>
			  </a>
			</li>
				<li class="rounded-xl active:scale-[0.9] w-full p-5 mb-5 bg-elementary">
			  <a target="_blank" class="flex text-action justify-start items-center  gap-[5px]"
			  href="/">
				  <InfoIcon size="20" />
				<span>Apresentação</span>
			  </a>
			</li>
			<li class="rounded-xl active:scale-[0.9] w-full p-5 mb-5 bg-elementary">
			  <a target="_blank" class="flex text-action justify-start items-center  gap-[5px]"
			  href="/recursos">
				  <LayersIcon size="20" />
				<span>Recursos</span>
			  </a>
			</li>
			<li class="rounded-xl active:scale-[0.9] w-full p-5 mb-5 bg-elementary">
			  <a target="_blank" class="flex text-action justify-start items-center  gap-[5px]"
			  href="/suporte">
				  <HelpCircleIcon size="20" />
				<span>Suporte</span>
			  </a>
			</li>
		</ul>
	</section>
</nav>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </header>
  
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
  </footer>
  
</div>


<style type="text/css" media="all">

#app-lay {
  animation: blocker ;
  animation-duration: 3s;
  animation-iteration-count: 1;
}

@keyframes blocker {
  0% { 
    height: 100vh;
    overflow-y: hidden;
  }
  95% { 
    height: 100vh;
    overflow-y: hidden;
  }
  100% {
    height: auto;
    overflow-y: scroll;
  }
}

</style>