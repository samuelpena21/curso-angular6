export class TravelDestination {
    
    private selected: boolean;
    public services: string[];

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