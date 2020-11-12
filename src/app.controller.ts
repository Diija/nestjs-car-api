import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Get, OnModuleInit, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CarrosEntity } from '../interfaces/carros';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    private readonly carService: InMemoryDBService<CarrosEntity>
  ) {}

  onModuleInit() : void {
    let DATA = [
      {
        "id" : "0",
        "modelo" : "Modelo0",
        "marca" : "Marca0",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 0,
        "preco" : 5000,
        "cor" : "branco",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "1",
        "modelo" : "Modelo1",
        "marca" : "Marca1",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 10,
        "preco" : 10000,
        "cor" : "cinza",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "2",
        "modelo" : "modelo2",
        "marca" : "marca2",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 20,
        "preco" : 15.000,
        "cor" : "preto",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "3",
        "modelo" : "modelo3",
        "marca" : "marca3",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 30,
        "preco" : 20000,
        "cor" : "amarelo",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "4",
        "modelo" : "modelo4",
        "marca" : "marca4",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 40,
        "preco" : 25000,
        "cor" : "vermelho",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "5",
        "modelo" : "modelo5",
        "marca" : "marca5",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 30,
        "preco" : 30000,
        "cor" : "rosa",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "6",
        "modelo" : "modelo6",
        "marca" : "marca6",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 30,
        "preco" : 35000,
        "cor" : "preto",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "7",
        "modelo" : "modelo7",
        "marca" : "marca7",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 40,
        "preco" : 30000,
        "cor" : "preto",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "8",
        "modelo" : "modelo8",
        "marca" : "marca8",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 100,
        "preco" : 15000,
        "cor" : "branco",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "9",
        "modelo" : "modelo9",
        "marca" : "marca9",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 200,
        "preco" : 5000,
        "cor" : "cinza",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "10",
        "modelo" : "modelo10",
        "marca" : "marca10",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 0,
        "preco" : 45000,
        "cor" : "preto",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "11",
        "modelo" : "modelo11",
        "marca" : "marca11",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 50,
        "preco" : 20000,
        "cor" : "vermelho",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "12",
        "modelo" : "modelo12",
        "marca" : "marca12",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 80,
        "preco" : 15000,
        "cor" : "cinza",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "13",
        "modelo" : "modelo13",
        "marca" : "marca13",
        "anoFab" : "2010",
        "anoModelo" : "2010",
        "km" : 200,
        "preco" : 15000,
        "cor" : "preto",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "14",
        "modelo" : "modelo14",
        "marca" : "marca14",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 10,
        "preco" : 15000,
        "cor" : "preto",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "15",
        "modelo" : "modelo15",
        "marca" : "marca15",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 20,
        "preco" : 30000,
        "cor" : "branco",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "16",
        "modelo" : "modelo16",
        "marca" : "marca16",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 50,
        "preco" : 12000,
        "cor" : "platinado",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "17",
        "modelo" : "modelo17",
        "marca" : "marca17",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 30,
        "preco" : 48000,
        "cor" : "ouro",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "18",
        "modelo" : "modelo18",
        "marca" : "marca18",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 2,
        "preco" : 8000,
        "cor" : "cinza",
        "listaAcessorios" : ["estojo","prato"]
      },
      {
        "id" : "19",
        "modelo" : "modelo19",
        "marca" : "marca2",
        "anoFab" : "2020",
        "anoModelo" : "2020",
        "km" : 0,
        "preco" : 1000000,
        "cor" : "diamante",
        "listaAcessorios" : ["estojo","prato"]
      }
    ]

    this.carService.createMany(DATA);
  }

  @Get('carros')
  getCar(@Query() query) : any[] {
    let carrosEntityArray : CarrosEntity[] = [];
    if( query.id && query.info && (query.info).toLowerCase() == 'all' ) { carrosEntityArray.push(this.carService.get(query.id)); return carrosEntityArray };
    if( query.id ) {
      let shortCarroEntityInfoArray : any[] = [];
      let shortCarroEntityInfo = {
        "modelo" : this.carService.get(query.id).modelo,
        "marca" : this.carService.get(query.id).marca,
        "preco" : this.carService.get(query.id).preco
      }
      shortCarroEntityInfoArray.push(shortCarroEntityInfo);
      return shortCarroEntityInfoArray;
    };
    return this.carService.getAll();
  }

  @Get('carros/filter/preco')
  getCarPriceWithFilters(@Query() query) : CarrosEntity[] {
    if(query.maior && query.menor) return this.carService.query( carroEntity => (carroEntity.preco > query.maior && carroEntity.preco < query.menor) );
    if(query.maior) return this.carService.query( carroEntity => carroEntity.preco > query.maior );
    if(query.menor) return this.carService.query( carroEntity => carroEntity.preco < query.menor );
  }

  @Get('carros/filter/km')
  getCarKmWithFilters(@Query() query) : CarrosEntity[] {
    if(query.maior && query.menor) return this.carService.query( carroEntity => (carroEntity.km > query.maior && carroEntity.km < query.menor) );
    if(query.maior) return this.carService.query( carroEntity => carroEntity.km > query.maior );
    if(query.menor) return this.carService.query( carroEntity => carroEntity.km < query.menor );
  }

  @Post('carros')
  createCars(@Body() cars : CarrosEntity[]): CarrosEntity[] {
    return this.carService.createMany(cars);
  }

  @Get('soma/:num1/:num2')
  sumNumbers(@Param('num1') num1 : number, @Param('num2') num2 : number) : string {
    let number = (num1.toFixed()+num2.toFixed());
    return number;
  }
}
