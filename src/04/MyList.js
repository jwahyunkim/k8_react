import MyListData from './MyListData.json'
import MyListItem from './MyListItem';
export default function MyList() {
    console.log(MyListData)
    const tags = MyListData.map(item => <MyListItem
                                                 key={item.title}
                                                 imgUrl={item.imgUrl}
                                                 content={item.content}
                                                 title={item.title} />);
    MyListData.map(item => console.log(item.title));

    return (
        <div className='w-10/12 grid grid-cols-2 li gap-4'>
            {tags}
        </div>
    )
}
