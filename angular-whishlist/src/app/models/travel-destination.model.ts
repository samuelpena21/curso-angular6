import {v4 as uuid} from 'uuid';

export class TravelDestination {
    
    private selected: boolean;
    public services: string[];
    id = uuid();

    constructor(public name:string, public imageUrl:string){
        this.services = ['pool', 'breakfast'];
    }
    isSelected() :boolean{
        return this.selected;
    }
    setSelected(select: boolean){
        this.selected = select;
    }
}