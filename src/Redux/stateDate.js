
import { renderEntireTree } from '../render';

let stateData = {
    accountPage: {
        accountData: [
            { id: 1, f: "Силицкий", i: "Эдуард", o: "Владимирович", age: "17", ageData: "22.10.06", otherData: "Ученик 11 класса, попутно учусь в IT академии BYTE. Уделяю много время изучению Frontend разработки. Люблю животных" }
        ]
    },
    dialogPage: {
        dialogsData: [
            { id: 1, name: "Мария" },
            { id: 2, name: "Даша" },
            { id: 3, name: "Коля" },
            { id: 4, name: "Юра" },
            { id: 5, name: "Иван" },
            { id: 6, name: "Максим" },
            { id: 7, name: "Кирилл" }
        ],
        messageData: [
            { id: 1, message: "Привет" },
            { id: 2, message: "Как дела?" },
            { id: 3, message: "Как жизнь" },
            { id: 4, message: "Отлично!" },
            { id: 5, message: "Отлично!" },
            { id: 6, message: "Отлично!" },
            { id: 7, message: "Отлично!" },
        ]
    },
    profilePage: {
        posts: [
            { id: 1, message: 'Я Вова', likesCount: 32 },
            { id: 2, message: 'Я люблю гонаять на гелике', likesCount: 15 },
            { id: 3, message: 'А ещё люблю ездить на нём на рыбалку', likesCount: 22 }
        ]
    },
    newsPage: {
        news: [
            { id: 1, data: "20.09.22 18:12", news: "Построили новый небоскреб" },
            { id: 2, data: "12.06.22 13:03", news: "Аномальная жара" },
            { id: 3, data: "09.01.22 00:12", news: "Самый большой салют" },
            { id: 4, data: "02.11.22 12:12", news: "Посторили самую быструю моторную лодку" }
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    stateData.profilePage.posts.push(newPost);
    renderEntireTree(stateData);
}

export default stateData;