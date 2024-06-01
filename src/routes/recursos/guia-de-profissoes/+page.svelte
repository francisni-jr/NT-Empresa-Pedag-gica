<svelte:head>
  <title>GUIA DE PROFISSÕES</title>
  <meta name="description" content="Tem dúvida em qual carreira seguir? Nós te
  ajudamos com isso de forma simples e intuitiva!">
  <meta name="keywords" content="RECURSOS, PÁGINA, TRABALHO, TRABALHADOR,
  EMPREGO, , CONHECIMENTO, FERRAMENTAS, AUXÍLIO, AJUDA, GUIA,PROFISSÕES,
  AUTOCONHECIMENTO, CONHECIMENTO, GERAL">
  <meta name="author" content="Francisní Gomes">
</svelte:head>


<script type="text/javascript" charset="utf-8">
  import { UserIcon, MoreHorizontalIcon , MoreVerticalIcon, BriefcaseIcon,
  LayersIcon  } from 'svelte-feather-icons'
</script>

<h1 class="text-3xl  mt-10 text-center pb-10 font-header text-elementary">
  <span
 class="font-highlight text- underline underline-offset-8 text-4xl
 text-elementary">GUIA DE PROFISSÕES</span></h1>
<main id="topicos" class="bg-base scroll-mt-10  gap-5 w-full mb-10 flex justify-center items-center dark:bg-base flex-col ">
  <a href="/recursos/guia-de-profissoes/autoconhecimento" class="flex p-5 justify-center
   items-center gap-5 bg-elementary rounded-xl 
   ">
    <UserIcon class="text-action" size="30" />
    <p class="text-xl text-action"  >Autoconhecimento</p>
  </a>
  <MoreVerticalIcon size="40" />
  <a href="/recursos/guia-de-profissoes/areas-de-atuacao" class="flex p-5
  justify-center
   items-center gap-5 bg-elementary gap-5 dark:gap-[5px] rounded-xl 
   ">
    <LayersIcon class="text-action" size="30" />
    <p class="text-xl text-action"  >Áreas de atuação</p>
  </a>
  <MoreVerticalIcon size="40" />
  <a href="/recursos/guia-de-profissoes/mercado-de-trabalho" class="flex p-5
  justify-center
   items-center gap-5 bg-elementary gap-5 dark:gap-[5px] rounded-xl 
   ">
    <BriefcaseIcon class="text-action" size="30" />
    <p class="text-xl text-action"  >Mercado de Trabalho</p>
  </a>
</main>