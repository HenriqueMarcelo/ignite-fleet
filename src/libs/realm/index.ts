import { createRealmContext } from '@realm/react'
import { Historic } from './schemas/Historic'

const realmFileBehavior: Realm.OpenRealmBehaviorConfiguration = {
  type: Realm.OpenRealmBehaviorType.OpenImmediately,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const syncConfig: any = {
  flexible: true,
  newRealmFileBehavior: realmFileBehavior,
  existingRealmFileBehavior: realmFileBehavior,
}

export const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext({
    schema: [Historic],
  })
