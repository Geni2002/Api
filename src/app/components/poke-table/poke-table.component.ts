import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent {

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons( ){

    for(let i =1; i <= 150; i++){
       this.pokeService.getPokemons(i).subscribe(
       res =>{
       console.log(res);
       },
       err=>{

     }
   );
  }

 }
}
