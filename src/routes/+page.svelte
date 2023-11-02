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
      class="text-center bg-fixed bg-gradient-to-b from-medium mb-tbp2
      via-maximal to-maximal from-20% via-25% to-60% p-tbp2 rounded-b-xl
      animate-pulse animate-once animate-duration-10000 animate-delay-1000
      animate-ease-in-out">
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
          <p>A CREASTATIC é um projeto BETA que está passando por fase de teste,
          por isso você poderá notar que não estamos totalmente desenvolvidos em
          muitos aspectos. Por isso estamos iniciando nossos serviços de uma
          forma descentralizada e diferente. Nosso foco é o E-business (Negócio
          Eletrônico) em que entregamos um serviço simples inicialmente para
          entregar serviços mais avançados com o passar do tempo. Somos poucos
          funcionarios para atender a tais serviços oferecidos, então não
          estamos 100% legalizados ainda, isso não te impede de forma alguma de
          adquirir produtos de pouca demanda. Na verdade, somos apenas uma pequena equipe
          colaboradora que realiza atividades de Desenvolvimento Web de forma
          incrivelmente responsável, você pode entrar em contato conosco atravéz
          do rodapé deste Website para saber ainda mais acesse nossa página de
        <a class="text-minimal" href="https://presentation.creastatic.tech">apresentação</a></p>
        </div>
      </div>
    </div>
    <div class="accordion" tabindex="0">
      <label class="title">COMO COMPRAR</label>
      <div class="content">
        <div class="min-h-0">
          <p>Para comprar qualquer serviço oferecido, primeiro tente acessar a
          página de <a class="text-minimal"
          href="https://catalogue.creastatic.tech">catálogo</a> e depois siga
          as intruções inseridas lá. Caso queira negociar ou fazer uma
          parceiria, entre em contato pelas nossas redes de comunicação.</p>
        </div>
      </div>
    </div>
  </section>
</main>
<footer class="px-5 py-5 flex justify-center flex-wrap items-center bg-medium mt-ls mt-20 rounded-b-xl">
  <div class="popover bg- my-10">
		<label class="trigger rounded-b-xl btn" tabindex="0">
			<p class="text-onminimal m-tbp1 border border-8 border-double rounded-full bg-minimal text-onminimal p-ss font-bold">Contate-nos</p>
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
	<div class="flex justify-center items-center">
		  <ul class="text-center gap-ss flex flex-col  justify-center
		  items-center">
			    <li class="text-center my-auto w-full flex items-center justify-center">
			      <LinkRecurrence>
			        <a target="_blank" class="" href="#">Apresentação</a>
			      </LinkRecurrence>
			    </li>
						    <li class="text-center my-auto w-full flex items-center justify-center">
			      <LinkRecurrence>
			        <a target="_blank" class="" href="#">Possíveis Dúvidas</a>
			      </LinkRecurrence>
			    </li>
						    <li class="text-center my-auto w-full flex items-center justify-center">
			      <LinkRecurrence>
			        <a target="_blank" class="" href="#">Catálogo</a>
			      </LinkRecurrence>
			    </li>
			  </ul>
	
	</div>
</footer>