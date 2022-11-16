from fastapi import status, APIRouter
from fastapi.responses import JSONResponse
from models import categories as Categories

router = APIRouter()

@router.get('/categories_breakdown')
def get_categories_breakdown():
    try:
        breakdown = Categories.get_breakdown()
        return breakdown
    except Exception as e:
        return JSONResponse({"Error": e},
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)