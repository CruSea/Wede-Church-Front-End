

export class Events{

  id: number;
  name: string;
  description: string;
  location: string;
  logo: string;

  constructor(id: number, name: string, description: string, location: string, logo: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.logo = logo;
  }


}
