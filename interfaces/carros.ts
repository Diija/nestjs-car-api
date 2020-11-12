import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";

export interface CarrosEntity extends InMemoryDBEntity {
    modelo : string;
    marca : string;
    anoFab : string;
    anoModelo : string;
    km : number;
    preco : number;
    cor : string;
    listaAcessorios : string[];
}