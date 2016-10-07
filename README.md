[![Build Status](https://travis-ci.org/laraconfbrasil/website.svg?branch=master)](https://travis-ci.org/laraconfbrasil/website)

# LaraconfBrasil website

Esse é o repositório oficial com o código fonte do [laraconfbrasil](http://laraconfbrasil.com.br) onde utilizamos
o HTML5 boilerplate como base.

Essa é uma iniciativa para que possamos compartilhar o código fonte que é exibido no site oficial da conferência, podendo assim facilitar a interação entre o evento e a comunidade.

## Utilizamos o Docpad para organizar esse projeto

De maneira  eficiênte o docpad nos fornece uma maneira simples e rápida para gerenciar conteúdo estático.

## Estrutura

A estrutura do projeto esta dividida da seguinte forma:

```
src 
|__ partials - todo o conteúdo de fato do site encontra-se aqui
|__ layouts  - o layout padrão utilizado pelo site
```

# Quer ser nosso parceiro?

É muito simples ser um de nossos parceiros, forke o repositório e adicione suas informações na seção **COUMNIDADES PARCEIRAS**.

Os logotipos das comunidades estão divididos em três colunas a cada linha, veja o código seguinte e a sua representação na imagem

``` html
<div class="row">
    <!-- logo laravel SP -->
    <div class="col-sm-4">
        <div class="sponsors-member">
            <a href="https://www.facebook.com/groups/laravelsp/" target="_blank">
                <img src="img/communities/logo_laravel_sp.png" class="img-responsive img-circle" alt="Lara vel São Paulo" height="300">
            </a>
        </div>
    </div>
    
    <!-- logo PHP com rapadura -->
    <div class="col-sm-4">
        <div class="sponsors-member">
            <a href="http://phpcomrapadura.org/" target="_blank">
                <img src="img/communities/phpcomrapadura.png" class="img-responsive img-circle" alt="PHP com rapadura">
            </a>
        </div>
    </div>
    
    <!-- logo PHP DF -->
    <div class="col-sm-4">
        <div class="sponsors-member">
            <a href="http://www.phpdf.org.br/" target="_blank">
                <img src="img/communities/php_df.png" class="img-responsive img-circle" alt="PHP DF - Comunidade de desenvolvedores PHP do Distrito Federal">
            </a>
        </div>
    </div>
</div>
```
![Representação dos logotipos](https://s22.postimg.org/pumgoi041/contribuicao.png)

Seguindo esse padrão seu logotipo será incorporado com sucesso na nossa página e será exibido no site oficial do **#LaraconfBrasil**

