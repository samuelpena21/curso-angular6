import {v4 as uuid} from 'uuid';

export class TravelDestination {
    
    private selected: boolean;
    public services: string[];
    id = uuid();

    constructor(public name:string, public imageUrl:string, public votes: number =0){
        this.services = ['pool', 'breakfast'];
    }
    isSelected() :boolean{
        return this.selected;
    }
    setSelected(select: boolean){
        this.selected = select;
    }
    voteUp() {
        this.votes++;
    }
    voteDown(){
        this.votes--;
    }
}