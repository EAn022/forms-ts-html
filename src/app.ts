function create_card_list(): void{
    const title = prompt("Digite o título da nova lista:");
    
    // verifica 
    if(!title){ 
        return;
    }

    const board = document.getElementById("board") as HTMLDivElement;
    const new_card_list = document.createElement("div") as HTMLElement;
    const card_list_title = document.createElement("h2") as HTMLElement;
    // const card_list_close = document.createElement("button") as HTMLElement;
    // const card_list_new_note = document.createElement("button") as HTMLElement;

    new_card_list.classList.add("card-list-area")
    card_list_title.innerText = title;
    card_list_title.classList.add("text-strong", "text_title", "text-color-primary");
    new_card_list.append(card_list_title);

    board.prepend(new_card_list)

}