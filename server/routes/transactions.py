from pymysql import IntegrityError
from models import transactions as Transactions
from fastapi import status, APIRouter, Request
from fastapi.responses import JSONResponse

router = APIRouter(
    prefix="/transactions"
)

@router.get('/')
def get_all_transactions():
    try:
        transactions = Transactions.get_all()
        return transactions
    except Exception as e:
        return JSONResponse({"Error": e},
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)


@router.post('/')
async def add_transaction(request: Request):
    transaction = await request.json()
    try:
        new_transaction = Transactions.add(transaction)
        return JSONResponse({"status": "Success. Added Transaction", "transaction":new_transaction},
            status_code=status.HTTP_201_CREATED)
    except Exception as e:
        return JSONResponse({"DB Error": str(e)},
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)
     

@router.delete('/{id}')
def delete_transaction(id):
    try:
        Transactions.delete(id)
        return JSONResponse({"deleted": "true"})
    except Transactions.ElementNotExistError as e:
        return JSONResponse({"Error": "Transaction does not exist"},
            status_code=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 