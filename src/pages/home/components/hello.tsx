import { Button } from 'antd';
const Hello = ({userName}) => {


    return (
        <div>
            hello {userName}
            <Button type="primary">Button</Button>
        </div>

    )
}

export default Hello;
