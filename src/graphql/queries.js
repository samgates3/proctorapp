/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProctorRoom = /* GraphQL */ `
  query GetProctorRoom($userName: String!) {
    getProctorRoom(userName: $userName) {
      userName
      proctorRoom
    }
  }
`;
export const listProctorRooms = /* GraphQL */ `
  query ListProctorRooms(
    $filter: TableProctorRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProctorRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userName
        proctorRoom
      }
      nextToken
    }
  }
`;
