import { ExclamationCircleFilled } from '@ant-design/icons'
import { Button, Modal, Space } from 'antd'
import { deleteUser } from '../Apis/usersApi'

const { confirm } = Modal
const showDeleteConfirm = (id, setUserList) => {
  confirm({
    title: `Do you want to delete this user with ID ${id}?`,
    icon: <ExclamationCircleFilled />,
    onOk() {
      deleteUser(id)
        .then(() => {
          setUserList((prevList) => prevList.filter((user) => user.id !== id))
        })
        .catch((e) => console.log(e))
    },
    onCancel() {},
  })
}

export default showDeleteConfirm
