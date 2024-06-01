<svelte:head>
  <title>SUPORTE</title>
  <meta name="description" content="Precisa de ajuda? Você pode acessar essa página
  para resolvermos seu problema.">
  <meta name="keywords" content="AJUDA, PÁGINA, FAQ, PERGUNTAS,
  PROBLEMA, , NOVO, TALENTO, AGENCIA, DUVIDAS, RESPOSTAS, SUPORTE">
  <meta name="author" content="Francisní Gomes">
</svelte:head>


<script type="text/javascript" charset="utf-8">
  import { MessageCircleIcon, InstagramIcon, MailIcon } from 'svelte-feather-icons'
</script>


<main class="p-10 bg-base dark:bg-base">
  <h1 class="text-3xl text-center pb-10 font-header text-elementary">Página de
  <span
 class="font-highlight text-elementary underline underline-offset-8
 text-4xl">SUPORTE</span></h1>
 
 <section class="p-10 text-elementary">
   <h1 class="text-3xl text-center pb-10 font-header text-">Entre em contato com
   a nossa equipe e tenha seu problema resolvido</h1>
   <div class="p-10 flex flex-col gap-10 border rounded-xl border-elementary">
      <div class=" flex flex-col border-b border-elementary p-5
   jstify-center items-center gap-5">
     <a href="tel:+5583993654780" class="bg-elementary text-base p-5 rounded-xl" >
       <MessageCircleIcon class="text-action"  size="30"  />
     </a>
     <h3 class="text-2xl text-elementary font-highlight">Telefone</h3>
   </div>
    <div class=" flex flex-col border-b border-elementary p-5
   jstify-center items-center gap-5">
     <a href="" class="bg-elementary text-base p-5 rounded-xl" >
       <InstagramIcon class="text-action" size="30"  />
     </a>
     <h3 class="text-2xl text-elementary font-highlight">Instagram</h3>
   </div>
   
   <div class=" flex flex-col border-b border-elementary p-5
   jstify-center items-center gap-5">
     <a href="mailto:agenciantpb@gmail.com" class="bg-elementary text-base p-5 rounded-xl" >
       <MailIcon class="text-action" size="30"  />
     </a>
     <h3 class="text-2xl text-elementary font-highlight">Gmail</h3>
   </div> 
   </div>
  </section>
</main>