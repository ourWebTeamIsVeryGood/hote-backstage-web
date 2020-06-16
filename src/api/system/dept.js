import request from '@/utils/request'

// 查询部门列表
export function listDept(query) {
  return request({
    url: '/group/list/json',
    method: 'post',
    data: query
  })
}

// 查询部门列表（排除节点）
export function listDeptExcludeChild(deptId) {
  return request({
    url: '/system/dept/list/exclude/' + deptId,
    method: 'get'
  })
}

// 查询部门详细
export function getDept(deptId) {
  return request({
    url: '/group/query',
    method: 'post',
    data:{
      id:deptId
    }
  })
}

// 查询部门下拉树结构
export function treeselect() {
  return request({
    url: '/group/listGroup',
    method: 'post'
  })
}

// 根据角色ID查询部门树结构
export function roleDeptTreeselect(roleId) {
  return request({
    url: '/system/dept/roleDeptTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增部门
export function addDept(data) {
  return request({
    url: '/group/save',
    method: 'post',
    data: data
  })
}

// 修改部门
export function updateDept(data) {
  return request({
    url: '/group/update',
    method: 'post',
    data: data
  })
}

// 删除部门
export function delDept(deptId) {
  return request({
    url: '/group/delete',
    method: 'post',
    data:{
      id:deptId
    }
  })
}