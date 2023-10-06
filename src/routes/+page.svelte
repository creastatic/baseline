<script type="text/javascript" charset="utf-8">
  import LinkRecurrence from '../recurrences/LinkRecurrence.svelte'
  import InfoRecurrence from '../recurrences/InfoRecurrence.svelte'
  import SuccessRecurrence from '../recurrences/SuccessRecurrence.svelte'
  import WarnRecurrence from '../recurrences/WarnRecurrence.svelte'
  import { CheckSquareIcon, ChevronsUpIcon} from 'svelte-feather-icons'
</script>

<main>
  <section class="flex flex-col justify-start items-center my-tbp2 mb-ls ">
    <div
      class="text-center bg-fixed bg-gradient-to-b from-medium mb-tbp2 via-maximal to-maximal from-20% via-25% to-60% p-tbp2 rounded-b-xl animate-pulse animate-once animate-duration-10000 animate-delay-1000 animate-ease-in-out">
      <h1 class="font-bold  font-header text-3xl">Com a <span class="font-highlight font-light">CREASTATIC</span> você
        poderá alcançar resuldados <span class="font-highlight font-light">SURPREENDENTES</span> em seus <span
          class="font-highlight font-light">WEBSITES ESTÁTICOS</span></h1>
      <p class="pt-tbp1 text-1xl ">Não é porquê um website é estático que ele não precisa ser profissional não é mesmo.
        É aí que surge a creastatic para criar websites de ultima linha com alguém capacitado para isso. </p>
        <button class="my-tbp2 border border-8 border-double rounded-full bg-minimal text-onminimal p-ss font-bold">
          <a href="#aboutcreastatic" class="text-1xl">SAIBA MAIS</a>
        </button>
    </div>
    <div class="mb-tbp2 mb-ls">
      <ul class="flex flex-col items-start gap-5">
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Pague muito menos que o convencional e obtenha um site de qualidade extrema.</span>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Obtenha benefícios extra a partir do primeiro produto, economize como nunca.</span>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span> Parcele para manutensão, não é necessário cartão de
            crédito.</span> <a href="">
            <LinkRecurrence><span>saiba mais</span></LinkRecurrence>
          </a>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Websites programados com as melhores ferramentas do universo web moderno. </span>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Sua necessidade é adaptada para uma melhor expriência.</span> <a href="inline">
            <LinkRecurrence><a class="https://catalogue.creastatic.tech" >catálogo</a></LinkRecurrence>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section class="mt-ls p-ls mt-tbp2">
    <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
      
      <iframe src="https://ytlink" frameborder="0" allowfullscreen
        class="absolute rounded-b-xl top-0 left-0 w-full h-full"></iframe>
    </div>
    <ChevronsUpIcon class="text-center mx-auto mt-5" size="40" />
    <h2 class="text-center text-3xl py-tbp1">NADA MELHOR DO QUE UMA INTRODUÇÃO A NOSSOS SERVIÇOS</h2>
  </section>
  <section class="accordion-group bw">
    <div class="accordion" tabindex="0">
      <label id="aboutcreastatic" class="title">SOBRE A CREASTATIC</label>
      <div id="aboutcreastatic" class="content">
        <div class="min-h-0">
          <p>A CREASTATIC é nada mais nada menos que uma INDENTIDADE VISUAL que Eu utilizo para vender algum serviço em tráfego orgânico, em outras palavras, por traz desta INDENTIDADE VISUAL há um Desenvolvedor Freelancer que optou por não utilizar a si mesmo como INDENTIDADE VISUAl para web, mas preferiu usar um nome específico que faria mais sentido para vendas no mundo web. Se quiser saber mais sobre mim, por favor visite o meu perfil no github ou na upWork que são minhas principais redes de informação, links disponíveis no rodapé deste website. A CREASTATIC não é uma empresa, quem vende não é a CREASTATIC mas sim um Profissional Freelancer. Não abordarei muito sobre mim neste website, já que tenho uma INDENTIDADE VISUAl expressiva por aqui. Se quiser saber mais sobre este Desenvolvedor por traz disso tudo, visite o meu portfólio ou acesse minhas redes, ambos disponíveis no rodapé deste website.</p>
        </div>
      </div>
    </div>
    <div class="accordion" tabindex="0">
      <label class="title">COMO COMPRAR</label>
      <div class="content">
        <div class="min-h-0">
          <p>Para comprar qualquer serviço vendido por mim, primeiro tente acessar a página de <a class="text-minimal" href="#">catálogo</a> e depois siga as intruções inseridas lá. Caso queira negociar ou fazer uma parceiria, entre em contato pelas minhas redes de comunicação.</p>
        </div>
      </div>
    </div>
  </section>
</main>
<footer class="px-5 flex justify-center items-center bg-medium mt-ls mt-20 rounded-b-xl">
  <div class="popover bg-minimal my-20">
		<label class="trigger rounded-b-xl btn" tabindex="0">
			<p class="text-onminimal m-tbp1">Contate-nos</p>
		</label>
		<div class="content top-center mb-10" tabindex="0">
			<div class="arrow" />
			<div class="p-4 text-sm bg-medium rounded-t-xl text-center">
			  <ul class="text-center">
			    <li class="text-center w-full flex items-center justify-center">
			      <LinkRecurrence>
			        <a target="_blank" class="" href="#">links não disponíveis. Aguarde uns dias...</a>
			      </LinkRecurrence>
			    </li>
			  </ul>
			</div>
		</div>
	</div>
</footer>