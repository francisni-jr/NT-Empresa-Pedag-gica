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


<main class="p-10">
  <h1 class="text-3xl text-center pb-10 font-header">Página de
  <span
 class="font-highlight underline underline-offset-8
 text-4xl">Contato</span></h1>
 
 <section class="p-10">
   <h1 class="text-3xl text-center pb-10 font-header text-">Entre em contato com
   a nossa equipe e tenha seu problema resolvido</h1>
   <div class="p-10 flex flex-col gap-10 border rounded-xl border-elementary">
      <div class=" flex flex-col border-b border-elementary p-5
   jstify-center items-center gap-5">
     <a href="tel:+5583993654780" class="rounded-xl  flex
    shadow-[1px_1px_30px_rgba(20,20,70,.6)] p-5 bg-elementary
    text-action p-5 font-header" >
       <MessageCircleIcon class="text-action"  size="30"  />
     </a>
     <h3 class="text-2xl font-highlight drop-shadow-lg">Telefone</h3>
   </div>
    <div class=" flex flex-col border-b border-elementary p-5
   jstify-center items-center gap-5">
     <a href="" class="rounded-xl  flex
    shadow-[1px_1px_30px_rgba(20,20,70,.6)] p-5 bg-elementary
    text-action p-5 font-header" >
       <InstagramIcon class="text-action" size="30"  />
     </a>
     <h3 class="text-2xl font-highlight drop-shadow-lg">Instagram</h3>
   </div>
   
   <div class=" flex flex-col border-b border-elementary p-5
   jstify-center items-center gap-5">
     <a href="mailto:agenciantpb@gmail.com" class="rounded-xl  flex
    shadow-[1px_1px_30px_rgba(20,20,70,.6)] p-5 bg-elementary
    text-action p-5 font-header" >
       <MailIcon class="text-action" size="30"  />
     </a>
     <h3 class="text-2xl font-highlight drop-shadow-lg">Email</h3>
   </div> 
   </div>
  </section>
</main>