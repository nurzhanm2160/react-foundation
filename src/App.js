import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostLIst from "./components/PostLIst";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'javascript', body: 'bb'},
        {id: 2, title: 'C++', body: 'descgregretion'},
        {id: 3, title: 'Java', body: 'cc'},]
    );

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {
        console.log('Отработала сортеровки постов')
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                 <MyInput
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                    placeholder={"Поиск..."}
                 />
                 <MySelect defaultValue={"сортировка по "}
                           value={selectedSort}
                           onChange={sortPosts}
                           options={[
                               {value: 'title', name: 'По названию'},
                               {value: 'body', name: 'По описанию'}
                           ]}
                 />
            </div>
            {posts.length !== 0
                ? <PostLIst remove={removePost} posts={sortedPosts} title={'Список постов 1'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}

        </div>
    );
}

export default App;
