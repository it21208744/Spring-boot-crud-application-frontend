import { ExclamationCircleFilled } from '@ant-design/icons'
import { Button, Modal, Space } from 'antd'
import { deleteUser } from '../Apis/usersApi'
import { toast } from 'react-toastify'

const { confirm } = Modal
const handleLogout = async (id) => {
  const response = await deleteUser(id)
  console.log(response)
  if (response.status == 200) {
    toast.success('user deleted')
  } else toast.error('Something went wrong')
}

const showDeleteConfirm = (id, setUserList) => {
  confirm({
    title: `Do you want to delete this user with ID ${id}?`,
    icon: <ExclamationCircleFilled />,
    onOk() {
      handleLogout(id)
        .then(() => {
          setUserList((prevList) => prevList.filter((user) => user.id !== id))
        })
        .catch((e) => console.log(e))
    },
    onCancel() {},
  })
}

export default showDeleteConfirm
