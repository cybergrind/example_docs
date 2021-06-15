.. _endpoints:

Endpoints
=========


Login
^^^^^

/api/rest/v001/login/ - Login endpoint
**************************************

.. http:post:: /api/rest/v001/login/

   Create an authenticated session for user. This session is required for using private API.
   If response status code is 200, user is logged in successfully.

   :<json string email: User email
   :<json string password: User password

   .. http_log :: web/integration_api.tests.test_api.login


.. _endpoints_store:

Store operations
^^^^^^^^^^^^^^^^

/api/rest/v001/store/[<store_id>/] - Store endpoint
***************************************************

.. http:get:: /api/rest/v001/store/

   List of stores

   :query store_fields: *(str list)* List of requested store fields from :ref:`StoreSerializerIntegration`
   :query group_id: *(int)* Filter stores by group_id

   .. http_log :: web/integration_api.tests.test_api.store.list


.. http:get:: /api/rest/v001/store/(int:store_id)/

   Get only one store

   :param store_id: *(int)* Store id
   :query store_fields: *(str list)* List of requested store fields from :ref:`StoreSerializerIntegration`

   .. http_log :: web/integration_api.tests.test_api.store.get


.. http:patch:: /api/rest/v001/store/(int:store_id)/

   Update store info

   :param store_id: *(int)* Store id
   :<json {}: fields from :ref:`StoreSerializerIntegration`

   .. http_log :: web/integration_api.tests.test_api.store.update


.. _endpoints_store_products:

Store products
^^^^^^^^^^^^^^

/api/rest/v001/store/<store_id>/inventory - List store inventory items
**********************************************************************

.. http:get:: /api/rest/v001/store/(int:store_id)/inventory

   Returns both wines and drinks.

   In get params must be list of fields for each struct inventory structs. If not specified which
   fields to fetch for a given struct, it will contain only "id" parameter. Param name, related to
   a given struct, listed below in inventory_fields description.

   :param store_id: *(int)* Store id
   :param status: *(str)* filter by status: match_complete, in_process, match_pending, bad_label, not_label, unmatched
   :query inventory_fields: *(str list)* Inventory fields list from :ref:`InventorySerializer`
   :query page_size: *(int)* Default page size is 1000 and it can be quite slow. Use limit that makes sense in your case.



/api/rest/v001/store/<store_id>/{wine,drink} - List or store wine/drink
***********************************************************************

**Please use /inventory API ** if you don't want to fetch drinks and wines separately.


.. http:get:: /api/rest/v001/store/(int:store_id)/wine

   In get params must be list of fields for each struct inventory structs. If not specified which
   fields to fetch for a given struct, it will contain only "id" parameter. Param name, related to
   a given struct, listed below in inventory_fields description.

   :param store_id: *(int)* Store id
   :param status: *(str)* filter by status: match_complete, in_process, match_pending, bad_label, not_label, unmatched
   :query inventory_fields: *(str list)* Inventory fields list from :ref:`RetailWineDynSerializer`
   :query page_size: *(int)* Default page size is 1000 and it can be quite slow. Use limit that makes sense in your case.

.. http:get:: /api/rest/v001/store/(int:store_id)/drink

   Same as wines list, but for drinks

   :params store_id: *(int)* Store id
   :param status: *(str)* filter by status: match_complete, in_process, match_pending, bad_label, not_label, unmatched
   :query inventory_fields: *(str list)* Inventory fields list from :ref:`RetailDrinkDynSerializer`
   :query page_size: *(int)* Default page size is 1000 and it can be quite slow. Use limit that makes sense in your case.

.. _endpoints_store_products_create:

/api/rest/v001/store/<store_id>/{wine,drink} - Create store wine/drink
**********************************************************************


.. http:post:: /api/rest/v001/store/(int:store_id)/wine

   Create a retail inventory wine. Minimal parameters for wine: barcodes and external_id. If wine_id
   is not passed, it will create item in unmatched state. Such item doesn't have linked wine, but
   it's useful when wine should be manually matched by Tipsi team.

   :params store_id: *(int)* Store id
   :<json {}: fields from :ref:`RetailWineCreateSerializer`


.. http:post:: /api/rest/v001/store/(int:store_id)/drink

   Similar to 'create store wine', but for drink.

   :params store_id: *(int)* Store id
   :<json {}: fields from :ref:`RetailDrinkCreateSerializer`


.. _endpoints_ext_id_operations:

External id operations
^^^^^^^^^^^^^^^^^^^^^^

/api/rest/v001/store/<store_id>/ext/<external_id> - Get, update or delete product
*********************************************************************************

.. http:get:: /api/rest/v001/store/(int:store_id)/ext/(int:external_id)

   Retrieve product

   :param store_id: *(int)* Store id
   :query inventory_fields: *(str list)* Inventory fields list from :ref:`RetailWineDynSerializer` or :ref:`RetailDrinkDynSerializer`


.. http:patch:: /api/rest/v001/store/(int:store_id)/ext/(int:external_id)

   Update product meta information

   :param store_id: *(int)* Store id
   :<json {}: fields from :ref:`RetailInvExtIdUpdateSerializer`


.. http:delete:: /api/rest/v001/store/(int:store_id)/ext/(int:external_id)

   Delete product

   :param store_id: *(int)* Store id


.. _endpoints_fts_search:

Full text search
^^^^^^^^^^^^^^^^

/api/rest/v001/fts/ - Search products
*************************************

.. http:get:: /api/rest/v001/fts/

   To filter products by `product_type` just add that type (`wine` or `drink`) to
   `fts_fields`. (For instance to get only wines you should add `wine` to
   `fts_fields` and do not add `drink` to `fts_fields` and do not add `drink_fields`
   query param)


   :query fts_fields: *(str list)* fields from :ref:`FTSSerializer`

   :query order_by: *(str list)* fields to order by. (e.g. '-vintage'). Sign '-' revers
      sort direction. Default ordering `id` (`-rank,id` in case `query` param is passed to request).
      Available fields:

      * vintage  - wine vintage (doesn't make sence for drinks)

   :query query: *(str)* Full text search.
   :query wine_id: *(int list)* Filter by wine_id (can be used with drink_id, in such case
      endpoint returns wines and drink together. See example 3)
   :query drink_id: *(int list)* Filter by drink_id (can be used with wine_id, in such case
      endpoint returns wines and drink together. See example 3)


   :query tag: *(int list)* Filter drinks by drink_tag id
   :query producer_id: *(int list)* Filter drinks by producer
   :query drink_type: *(str list)* Filter drinks by drink_type. Available drink_type:

       * beer
       * cocktail
       * spirits
       * other

   :query varietal_id: *(int list)* Filter wines by varietal id
   :query sub_region_id: *(int list)* Filter wines by subregion id
   :query winery_id: *(int list)* Filter wines by winery id
   :query vineyard_id: *(int list)* Filter wines by vineyard id
   :query designation_id: *(int list)* Filter wines by designation id
   :query region_id: *(int list)* Filter wines by region id
   :query vintage: *(int|NV list)* Filter wines by vintage (`NV` for non-vintage)
   :query color: *(int list)* Filter wines by color
   :query wine_type: *(str list)* Filter wines by type. Available types:

      * regular
      * fortified
      * sparkling
      * dessert
      * offdry

   :query pro_rating_from: *(int)* Filter wines by min pro_rating
   :query pro_rating_to: *(int)* Filter wines by max pro_rating

   :query country_id: *(int list)* Filter wines and drinks by country id
   :query country_id_exclude: *(int list)* Filter wines and drinks which are not in country id

**Search API requires at least one of next http query params:**

   * query
   * wine_id
   * drink_id
   * winery_id


.. _endpoints_pos_sync_ops:


POS Sync
^^^^^^^^

.. _endpoints_pos_sync:

/api/rest/v001/store/<store_id>/ext/sync - Sync Inventory
*********************************************************

.. http:patch:: /api/rest/v001/store/(int:store_id)/ext/sync

   Body must be JSON encoded array list of inventory structs. Each struct has to contain
   "external_id" param, which will be used to lookup related item in inventory. Unnecessary params
   can be omitted, in that case they will not be updated. By the way, as "external_id" is used to
   lookup inventory, inventory Tipsi "id" param is prohibited here as the request will look
   ambiguously, thus trying to use it will cause error with HTTP respone 400.

   **NOTE**: you need to specify "category" field on item to be either: "wine" or "drink" to create
   tasks with correct types

   :param store_id: *(int)* Store id
   :<json []: list of structs with fields from :ref:`RetailInvExtIdBulkCreateSerializer` or :ref:`RetailInvExtIdBulkUpdateSerializer`


.. _endpoints_pos_sync_clear:

/api/rest/v001/store/<store_id>/ext/sync_clear - Sync Inventory With Clearing
*****************************************************************************

.. http:patch:: /api/rest/v001/store/(int:store_id)/ext/sync_clear

   Same, as :ref:`endpoints_pos_sync`, except will clear inventory not listed in the batch. It's a
   safe method as it will just mark in_stock parameter to 0. For real inventory deletion DELETE
   method should be used upon each inventory item.

   :param store_id: *(int)* Store id
   :<json []: list of structs with fields from :ref:`RetailInvExtIdBulkCreateSerializer` or :ref:`RetailInvExtIdBulkUpdateSerializer`


Create tasks
^^^^^^^^^^^^

.. _endpoints_upload_image:

/api/rest/v001/store/<store_id>/image_upload - Upload image
***********************************************************

.. http:post:: /api/rest/v001/store/(int:store_id)/image_upload

   Upload image

   :param store_id: *(int)* Store id
   :formparam image: Image file encoded using standard "multipart/form-data"


.. _endpoints_create_task:

api/rest/v001/store/<store_id>/{wine,drink}/<wine_inventory_id>/create_task - Create task
*****************************************************************************************

.. http:post:: /api/rest/v001/store/(int:store_id)/wine/(int:inventory_id)/create_task

   Create task for unmatched wine

   :param store_id: *(int)* Store id
   :<json string front_image: *(str) required* Front image url.
   :<json string back_image: *(str)* Back image url.
   :<json string vintage: *(str)* Wine vintage.


.. http:post:: /api/rest/v001/store/(int:store_id)/drink/(int:inventory_id)/create_task

   Create task for unmatched drink

   :param store_id: *(int)* Store id
   :<json string front_image: *(str) required* Front image url.
   :<json string back_image: *(str)* Back image url.


Orders API
^^^^^^^^^^

.. _endpoint_orders_list:

A user must have admin privileges to fetch or modify store orders.

api/rest/v001/group/<group_id>/order_management/order/ - List of orders for retail group
****************************************************************************************

.. http:get:: /api/rest/v001/group/group/(int:group_id)/order_management/order/

   Return paginated orders list of all the stores in the given retail group. If you want to limit results to the
   given store, it's required to pass store_id into query parameters.

   :param group_id: *(int)* Retail group id
   :query query: *(str)* Filter order by search string. Do full/partial/match with typos for following fields: code, user name, phone
   :query order_fields: *(str list)* List of requested order fields from :ref:`OrderSerializer`
   :query store_fields: *(str list)* List of requested order store fields from :ref:`StoreSerializerIntegration`
   :query store_id: *(int)* Limit results to the given store_id, optional parameter
   :query page: *(int)* Page number starting from "1", optional parameter
   :query page_size: *(int)* The number of results per a page, optional parameter
   :query order_status: *(str list)* Filter orders by order_status. For statuses see :ref:`OrderSerializer`
   :query order_status_exclude: *(str list)* Exclude orders with given order_status. For statuses see :ref:`OrderSerializer`
   :query payment_status: *(str list)* Filter orders by payment_status. For statuses see :ref:`OrderSerializer`
   :query updated_from: *(str)* Show orders updated from given time. (e.g. `2018-05-05 8:00`)

   .. http_log :: pytest_payments.test_order.get_integration_group_orders


api/rest/v001/group/<group_id>/order_management/order/<order_id>/ - Order api
*****************************************************************************

.. http:get:: /api/rest/v001/group/(int:group_id)/order_management/order/

   Return paginated orders list.

   :param group_id: *(int)* Retail group id
   :param order_id: *(int)* Order id
   :query order_fields: *(str list)* List of requested order fields from :ref:`OrderSerializer`
   :query store_fields: *(str list)* List of requested order store fields from :ref:`StoreSerializerIntegration`

   .. http_log :: pytest_payments.test_order.get_integration_group_order


api/rest/v001/group/<group_id>/order_management/order/<order_id>/ - Update order status
***************************************************************************************

.. http:patch:: /api/rest/v001/group/(int:group_id)/order_management/order/(int:order_id)/

   Update order status.

   :param group_id: *(int)* Retail group id
   :param order_id: *(int)* Order id

   :<json string order_status: *(str)* Order status. (approved, pickup_ready, delivered, in_transit, reconciled, canceled_by_retail)

   .. http_log :: pytest_payments.test_order.patch_integration_group_orders


api/rest/v001/group/<group_id>/payment_system/order/<order_id>/ - Update payment status
***************************************************************************************

.. http:patch:: /api/rest/v001/group/(int:group_id)/payment_system/order/(int:order_id)/

   Update order status. Allowed to change only from status `held`

   :param group_id: *(int)* Retail group id
   :param order_id: *(int)* Order id

   :<json string status: *(str)* Payment status. (capturing, refunding)

   .. http_log :: pytest_payments.test_order.patch_integration_group_payment


api/rest/v001/group/<group_id>/order_management/order/<order_id>/product/ - List products
*****************************************************************************************


.. http:get:: /api/rest/v001/group/(int:group_id)/order_management/order/(int:order_id)/product/

   Return paginated products list.

   :param group_id: *(int)* Retail group id
   :param order_id: *(int)* Order id
   :query product_fields: *(str list)* List of requested order fields from :ref:`ProductSerializer`
   :query page: *(int)* Page number starting from "1", optional parameter
   :query page_size: *(int)* The number of results per a page, optional parameter

   .. http_log :: pytest_payments.test_order.get_integration_group_order_product


Other
^^^^^

.. _endpoints_scan_label:

api/rest/v001/store/<store_id>/scan_label/ - Get wine by label image
********************************************************************


.. http:post:: /api/rest/v001/store/(int:store_id)/scan_label/

   Return list of wines.

   **Note: you should make this request as ``multipart/form``**

   :param label_image: *(int)* Retail group id
   :query wine_fields: *(str list)* List of requested order fields from :ref:`PrivateRetailWineSerializer`

   .. http_log :: web/integration_api.tests.test_label_scan.wine_label_scan


   You will get two major keys:

   * ``target_wine`` - the most similar match
   * ``wine_variations`` - other similar wines ordered by match descendent order


   Then you might want to get more information about wines. You can do it by using :ref:`endpoints_fts_search`.
   Pass ``wine_id`` parameter with comma separated wines and ``fts_fields=wine`` to retrieve results ::

      curl 'https://gettipsi.com/api/rest/v001/fts/?wine_id=527079,828309&fts_fields=wine&wine_fields=name,pro_rating,vintage,winemakers_note' -H 'Cookie: sessionid=<MY_COOKIE>'

   Full list of fields can be found :ref:`FTSSerializer`
